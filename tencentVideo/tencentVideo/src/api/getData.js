import fly from '@/utils/fly'

export function getData(url) {
    return fly.get(url).then((res) => {
        // console.log(res.data.data);
        return res.data.data
    })
}
