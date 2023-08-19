FROM alpine
ARG working_dir="/App"
COPY src ${working_dir}/src
COPY package.json ${working_dir}/
COPY package-lock.json ${working_dir}/
RUN npm install
RUN npm start