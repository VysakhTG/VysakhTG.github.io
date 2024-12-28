from flask import Flask, request, Response, render_template
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/proxy', methods=['GET', 'POST'])
def proxy():
    target_url = request.args.get('url')  # URL to be proxied

    if not target_url:
        return "Please provide a URL to proxy using ?url=<URL>", 400

    try:
        # Fetch the target URL
        response = requests.request(
            method=request.method,
            url=target_url,
            headers={key: value for key, value in request.headers if key != 'Host'},
            data=request.get_data(),
            cookies=request.cookies,
            allow_redirects=False
        )

        # Relay the response
        excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
        headers = [(name, value) for name, value in response.raw.headers.items()
                   if name.lower() not in excluded_headers]

        return Response(response.content, response.status_code, headers)

    except requests.exceptions.RequestException as e:
        return f"Error fetching the URL: {e}", 500


if __name__ == '__main__':
    app.run(debug=True)
  
