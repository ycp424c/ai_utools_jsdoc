;(()=>{

    const outputTarget = document.getElementById('output')
    const outputTargetDiv = document.getElementById('output_div')

    window.pageHandler = window.pageHandler || {}
    pageHandler.handleGenerate = async ()=>{
        outputTargetDiv.innerText = '生成中'
        const ret = await requestGPT(outputTarget.value)
        try{
            outputTargetDiv.innerText = ret.data.choices[0].message.content
            pageHandler.copyResult()
        }catch(e){
            outputTargetDiv.innerText = e + '\n' + JSON.stringify(ret)
        }
    }
    pageHandler.copyResult = ()=>{
        utools.copyText(outputTargetDiv.innerText)

    }
    window.utools.onPluginEnter(async ({code,type,payload})=>{
        outputTarget.value = payload
        pageHandler.handleGenerate()
        
    })
})()
