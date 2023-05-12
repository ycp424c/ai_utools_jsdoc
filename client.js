;(()=>{

    const outputTarget = document.getElementById('output')
    const outputTargetDiv = document.getElementById('output_div')

    window.pageHandler = window.pageHandler || {}
    pageHandler.handleGenerate = async ()=>{
        const ret = await requestGPT(outputTarget.value)
        outputTargetDiv.innerText = ret.data.choices[0].message.content
    }
    pageHandler.copyResult = ()=>{
        utools.copyText('outputTargetDiv.innerText')

    }
    window.utools.onPluginEnter(async ({code,type,payload})=>{
        outputTarget.value = payload
        pageHandler.handleGenerate()
        
    })
})()
