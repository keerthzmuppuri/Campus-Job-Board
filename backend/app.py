import secrets

secret_key = secrets.token_hex(16)
print("Generated Secret Key:", secret_key)
from flask import Flask

app = Flask(__name__)

# Define routes
@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/about')
def about():
    return 'This is the about page.'

# Configuration
app.config['SECRET_KEY'] = secret_key

if __name__ == "__main__":
    app.run(debug=True)
