(defproject backend "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [   [org.clojure/clojure "1.5.1"] 
                    [http-kit "2.1.16"]
                    [compojure "1.1.5"]
                    [ring/ring-devel "1.1.8"]
                    [compojure "1.1.5"]
                    [ring-cors "0.1.0"]
                    [org.clojure/tools.logging "0.2.6"] ]
  :main backend.core
)
