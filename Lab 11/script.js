async function allVideos() {
    const Allvideos = await fetch('https://videostar.dacoder.io/', {})
    const videos = await Allvideos.json()
    console.log('=== All Vidoes ===')
    // console.log(videos)
    for (const item in videos){
        const video = videos[item]
        console.log(`${item}. ${video.name}`)
        console.log(await video.isFree)
        console.log(await video.isPurchased)
        console.log(await video.duration)
        console.log(await video.size)
        console.log(await video.size)
        console.log(await video.price)
        console.log(await video.url)
    }
}
// allVideos()

async function getVideo(id) {
    const Myvideo = await fetch(`https://videostar.dacoder.io/${id}`, {})
    const video = await Myvideo.json()
    if (video.id !== undefined){
        console.log('=== All Vidoes ===')
        console.log(`ID: ${video.id}`)
        console.log(`Title: ${video.name}`)
        console.log(`Discription: `)
        console.log(await video.isFree)
        console.log(await video.isPurchased)
        console.log(await video.duration)
        console.log(await video.size)
        console.log(await video.size)
        console.log(await video.price)
        console.log(await video.url)
    }else{
        console.log(`Error: video not found`)
    }

}

// getVideo(10)

const prompt = require("prompt-sync")()

const input = prompt('Enter vidoe ID: ')

getVideo(+input)
