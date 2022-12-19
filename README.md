# wordpress-vite
vite for render wp content

# Prerequesites:
i used and recommend:
Node v19.2.0
npm v8.19.3
docker for windows 4.15.

# Install

## vite
`npm i` on root, then
`npm run dev`

## wp
`docker-compose up` in .docker/ directory

there are 2 volumes, you can add the provided data in the zip files:
/bitnami/mariadb
add the content of mariadb.zip into /bitnami/mariadb/data/*here*

/bitnami/wordpress
add the wp-config to /bitnami/wordpress
add the contents of wp-content.zip to /bitnami/wordpress/wp-content/*here*

## blank wp
you can also start a new wp project and just add the plugins
lazy-blocks https://www.lazyblocks.com/docs/getting-started/install-lazy-blocks-plugin/
and create a lazy-block with lazy-youtube.php content

## what else
just add a new page with an lazy-youtube block or text and it will be loaded onto vite frontend