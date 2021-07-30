const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post("/",(req,res)=>{
    db.Trip.create(req.body).then(newTrip=>{
        res.json(newTrip);
    })
})
router.delete("/:id",(req,res)=>{
    db.Trip.destroy({
        where:{
            id:req.params.id
        }
    }).then(trips=>{
        res.json(trips);
    })
})

module.exports = router;