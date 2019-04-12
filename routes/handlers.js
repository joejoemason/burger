const express = require("express");
const router = express.Router();
const orm = require('../config/orm')


router.get("/", function (req, res) {
    orm.selectAll(function (error, result) {
        console.log("ERROR: ", error);
        console.log("RESULT: ", result);
        if (error) {
            return res.render('error');
            res.getHeader(header)
        }
        res.render("index", {
            result: result,
            style: 'index',
            title: 'Burger App'
        });
    });
});

router.get("/", function (req, res) {
    orm.selectAllBy('devoured', false, function (error, result) {
        if (error) {
            return res.render('error');
        }
        res.render("index", {
            result: result,
            style: 'index',
            title: 'Burger App'
        });
    });
});

// Adding and Update burger section
router.post("/add", function (req, res) {
    const burgerName = req.body.burger_name;
    // const isFavorite = req.body.isFavorite;

    orm.insertOne(burgerName, function (error, results) {
        error ? console.log(error): console.log("insert one " + JSON.stringify(results))
        if (error) {
            return res.status(401).json({
                message: 'Not able to add the burger'
            });
        }
        console.log('***************', results)
        return res.json({
            id: results.insertId,
            burger_name: burgerName,
            devoured: 0
        });
    });
});


router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    orm.deleteOne(id, (err, result) => {
        if (err) {
            return res.status(501).json({
                message: 'Not able to delete burger'
            });
        }

        return res.json({
            id
        });
    });
});


router.put("/:id", function (req, res) {
    const id = req.params.id;
    // const value = JSON.parse(req.params.value);
    orm.destroy({
        where: {
          id:id
        }
      }).then(response => {
        console.log(response);
      });
    orm.updateOne(value, id, function (error, burger) {
        if (error) {
            return res.status(501).json({
                message: 'Not able to add burger to your favorite'
            });
        }
        return res.json({
            id: id
        });
    });
});






module.exports = router;