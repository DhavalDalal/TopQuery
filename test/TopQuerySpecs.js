describe("TopQuerySpecs", function () {

    var topQuery, sql, maxResults;

    beforeEach(function () {
        topQuery = new TopQuery();
        sql = "select * from employee";
        maxResults = 50;
    });

    it("Create Access top query", function() {
        topQuery.setDbType(TopQuery.DB_ACCESS);
        topQuery.setMaxResults(maxResults);
        var topSql = "SELECT TOP " + maxResults + " * FROM (" + sql + ")";
        expect(topQuery.query(sql)).toBe(topSql);
    });

    it("Create Sybase top query", function() {
        topQuery.setDbType(TopQuery.DB_SYBASE);
        topQuery.setMaxResults(maxResults);
        var topSql = "SELECT TOP " + maxResults + " * FROM EMPLOYEE";
        expect(topQuery.query(sql)).toBe(topSql);
    });

    it("Create SQLServer top query", function() {
        topQuery.setDbType(TopQuery.DB_SQL_SERVER);
        topQuery.setMaxResults(maxResults);
        var topSql = "SELECT TOP " + maxResults + " * FROM EMPLOYEE";
        expect(topQuery.query(sql)).toBe(topSql);
    });

    it("Create Oracle top query", function() {
        topQuery.setDbType(TopQuery.DB_ORACLE);
        topQuery.setMaxResults(maxResults);
        var topSql = "SELECT * FROM (" + sql + ") WHERE rownum <= " + maxResults;
        expect(topQuery.query(sql)).toBe(topSql);
    });

    it("Create Other/Default top query", function() {
        topQuery.setDbType(TopQuery.DB_OTHER);
        topQuery.setMaxResults(maxResults);
        expect(topQuery.query(sql)).toBe(sql);
    });

    it("Does not create a top query when maxResults are not specified", function() {
        topQuery.setDbType(TopQuery.DB_ORACLE);
        expect(topQuery.query(sql)).toBe(sql);
    });
});

