AFRAME.registerComponent("banners",{
    schema:{
        itemId:{default:"",type:"string"}
    },

    init:function(){
        this.createBanner()
    },

    createBanner(){
        const postersInfo = {
            comic1:{
                banner:"./assets/images/banner1.jpg",
                title:"Captain America",
                description:"Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939."
            },
            comic2:{
                banner:"./assets/images/banner2.jpg",
                title:"Spiderman",
                description:"Spiderman is an ongoing Hungarian comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939."
            },
            comic3:{
                banner:"./assets/images/banner3.jpg",
                title:"Ironman",
                description:"Ironman is an ongoing Canadian comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939."
            },
            comic4:{
                banner:"./assets/images/banner4.jpg",
                title:"Hulk",
                description:"Hulk is an ongoing Japanese comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939."
            }     
        }

        const {itemId} = this.data
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("position",{x:0,y:0,z:-1})
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:1.35,
            height:1.37
        })
        entityEl.setAttribute("material",{
            color:"black",
            opacity:1
        })
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("id",`${itemId}-banner`)

        var item = postersInfo[itemId]

        imageEl = this.createImage(item)
        titleEl = this.createTitle(item)
        descriptionEl = this.createDescription(item)

        entityEl.appendChild(imageEl)
        entityEl.appendChild(titleEl)
        entityEl.appendChild(descriptionEl)

        const fadeBackground = document.querySelector("#fade-background")
        fadeBackground.appendChild(entityEl)
    },

    createImage: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:1.25,
            height:0.6
        })
        entityEl.setAttribute("position",{x:0,y:0.33,z:0.05})
        entityEl.setAttribute("material",{
            src:item.banner
        })
        return entityEl
    },

    createTitle: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("position",{x:0,y:-0.05,z:0.06})
        entityEl.setAttribute("text", {
            align: "center",
            font: "exo2bold",
            width: 2,
            color: "#fff",
            value: item.title,
        })
        return entityEl
    },

    createDescription:function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("position",{x:0,y:-0.35,z:0.06})
        entityEl.setAttribute("text",{
            align:"left",
            width:0.9,
            color:"#fff",
            font:"exo2bold",
            wrapCount:43,
            value:item.description
        })
        return entityEl
    }
})