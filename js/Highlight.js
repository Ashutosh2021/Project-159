AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{type:"string",default:""}
    },

    init:function(){
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
    },

    update: function(){
        const fadeBackground = document.querySelector("#fade-background")
        c=fadeBackground.children

        if(c.length>0){
            for(var i =0 ; i<=c.length ; i++){
                fadeBackground.removeChild(c[i])
            }
        }else{
            this.handleClickEvents()
        }
    },

    handlePostersListState: function(){
        
            const id= this.el.getAttribute("id")
            const posterId = ["comic1","comic2","comic3","comic4"]

            if (posterId.includes(id)){
                const postersContainer = document.querySelector("#posters-container")
                postersContainer.setAttribute("cursor-listener",{
                    selectedItemId:id
                });
                this.el.setAttribute("material",{
                    color:"blue",
                    opacity:1
                })
            }
        
    },

    handleMouseEnterEvent: function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePostersListState();
        })
    },

    handleMouseLeaveEvent: function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if(id === selectedItemId){
                    el.setAttribute("material",{
                        color:"white",
                        opacity:1
                    })
                }
            }
        })
    },

    handleClickEvents:function(){
        this.el.addEventListener("click",()=>{

            const {selectedItemId}=this.data
            const appTitle=document.querySelector("#app-title")
            const fadeBackground=document.querySelector("#fade-background")
            const cursorEl = document.querySelector("#camera-cursor")

            if(selectedItemId){
                appTitle.setAttribute("visible",false)
                fadeBackground.setAttribute("visible",true)
                fadeBackground.setAttribute("banners",{
                    itemId:selectedItemId
                })
                
            }else{
                fadeBackground.setAttribute("visible",false)
                appTitle.setAttribute("visible",true)
            }
            
        })
    }
})