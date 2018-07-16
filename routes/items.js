const Item = require('../models/item');
const router = require('express').Router();


// Index all items
router.get("/", function (req, res, next) {
    Item.findAll((err, items) => {
        if (err) throw err
        res.json(items);
    });
});

// SHOW
router.get('/:id', (req, res) => {
    Item.findById(req.params.id, (err, item) => {
        if (err) throw err;
        res.json(item);
    });
});

// EDIT - show edit forms, a client side route
router.get('/:id/edit', (req, res) => {

});

// UPDATE
router.put('/:id', (req, res) => {

    Item.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        note: req.body.note,
        purchased: req.body.purchased
    }, (err, item) => {
        if (err) throw err;
        if (item) {
            res.json({ success: true, msg: "Item updated successfully." });
        } else {
            res.json({ success: false, msg: "Item update failed." });
        }
    });
});

// CREATE an item
router.post('/', (req, res, next) => {

    const newItem = {
        title: req.body.title,
        note: req.body.note,
    };

    Item.addItem(newItem, function (err, newItem) {
        if (err) throw err;
        res.json(newItem);
    });
});

// DESTROY
router.delete('/:id', (req, res) => {

    Item.deleteById(req.params.id, (err, item) => {
        if (err) throw err;
        if (item) {
            res.json({ success: true, msg: "Item removed successfully: " + item });
        } else {
            res.json({ success: false, msg: "Failed to remove item." });
        }
    });
});

module.exports = router;
