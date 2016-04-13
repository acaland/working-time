exports.definition = {
	config: {

		adapter: {
			type: "sql",
			collection_name: "clocking"
		},
		columns: {
		      "t1":"datetime",
		      "t2":"datetime",
		      "t3":"datetime",
			  "t4": "datetime",
			  "day": "date"
    	},
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};
