const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get("/",(req,res)=>{
    db.Traveller.findAll().then(trips=>{
        res.json(trips);
    })
})
router.post("/",(req,res)=>{
    db.Traveller.create(req.body).then(newTrip=>{
        res.json(newTrip);
    })
})
router.get("/:id",(req,res)=>{
    db.Traveller.findByPk(req.params.id,{
        include:[{
            model:db.Trip,
            include:[db.Location]
        }]
    }).then(trips=>{
        res.json(trips);
    })
})
router.delete("/:id",(req,res)=>{
    db.Traveller.destroy({
        where:{
            id:req.params.id
        }
    }).then(trips=>{
        res.json(trips);
    })
})

module.exports = router;