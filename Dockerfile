FROM node as build
WORKDIR /app
COPY package*.json /app/
RUN npm install --force
COPY . /app
RUN npm run build -- --configuration=production
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/portifolio /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/nginx.conf