(ns backend.core)

(require    ['org.httpkit.server :as 'httpkit]
            ['compojure.route :as 'route]
            ['compojure.handler :as 'handler]
            ['ring.middleware.reload :as 'reload]
            ['ring.middleware.cors :as 'cors]
            ['compojure.core :refer :all]
            ['clojure.tools.logging :refer :all])
(use 'clojure.java.io)

(defn messages [req]  
   (slurp "messages.json")
  )


(defroutes appRoutes
  (GET "/api/messages" [] messages)
  (route/files "/" {:root "../frontapp"})
  (route/not-found "<h1>Page not found</h1>"))

(def application (-> (handler/site appRoutes)
                     reload/wrap-reload
                     (cors/wrap-cors
                      :access-control-allow-origin #".+")))

(defn -main [& args]
    (info "Loading run server.")
    (httpkit/run-server application {:port 8080}))
