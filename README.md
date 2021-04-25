# Travilias server admin

## Setup

### MongoDB
You can use any authentication method to connect to your mongodb (including certificates).
You only need to fill your `.env` file with this variables :
- `DATABASE_NAME` : Name of the database to use
- `DATABASE_URL` : Url to the database (it may contains authentication informations like user/password)
- `DATABASE_CERT_LOCATION` : (only if you are using certs to connect to your mongodb database) : path to your certification file

