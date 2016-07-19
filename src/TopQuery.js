function TopQuery() {
	this.NO_MAXIMUM_LIMIT = -1;
    this.dbType = -1;
    this.maxResults = this.NO_MAXIMUM_LIMIT;
};

TopQuery.DB_ACCESS = 1;
TopQuery.DB_ORACLE = 2;
TopQuery.DB_SQL_SERVER = 3;
TopQuery.DB_SYBASE = 4;
TopQuery.DB_OTHER = 5;

TopQuery.prototype._isValidDbType = function(dbType) {
	switch (dbType) {
		case TopQuery.DB_ACCESS:
		case TopQuery.DB_SYBASE:
		case TopQuery.DB_SQL_SERVER:
		case TopQuery.DB_ORACLE:
		case TopQuery.DB_OTHER: return true;
		default: return false;
	}
};

TopQuery.prototype.setMaxResults = function(howMany) {
	this.maxResults = howMany > 0 ? howMany : this.NO_MAXIMUM_LIMIT;
};

TopQuery.prototype.setDbType = function(dbType) {
	if(this._isValidDbType(dbType))
		this.dbType = dbType;
};

TopQuery.prototype.query =  function(query) {
	switch (this.dbType) {
		case TopQuery.DB_ACCESS:
			return (this.maxResults === this.NO_MAXIMUM_LIMIT) ? query : "SELECT TOP "
			+ this.maxResults + " * FROM (" + query + ")";

		case TopQuery.DB_SYBASE:
		case TopQuery.DB_SQL_SERVER:
			if (this.maxResults === this.NO_MAXIMUM_LIMIT)
				return query;
			else {
				query = query.toUpperCase();
				if (query.indexOf("SELECT ") != -1)
					return query.replace("SELECT ", "SELECT TOP "
						+ this.maxResults + " ");
				else
					return query;
			}

		case TopQuery.DB_ORACLE:
			return (this.maxResults === this.NO_MAXIMUM_LIMIT) ? query : "SELECT * FROM ("
			+ query + ") WHERE rownum <= " + this.maxResults;

		case TopQuery.DB_OTHER:
		default:
			return query;
	}
};
