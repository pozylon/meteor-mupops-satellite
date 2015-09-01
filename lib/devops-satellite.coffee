Router.map ->
  this.route 'appVersion',
    path: '/api/version',
    where: 'server',
    action: ->
      requestMethod = this.request.method;
      if requestMethod == 'GET'
        val =
          version: "n/a"
        if Meteor.settings && Meteor.settings.private && Meteor.settings.private.appVersion
          this.response.writeHead 200,
            'Content-Type': 'text/json'

          val.version = Meteor.settings.private.appVersion
          return this.response.end JSON.stringify(val)
        this.response.writeHead 404
        return this.response.end JSON.stringify(val)
      this.response.writeHead 403
      this.response.end