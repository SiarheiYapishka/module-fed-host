FROM node:18 AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/ng-mf-shell /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]