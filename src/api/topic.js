import util from '@/utils'

export default {
    async topicsIndex () {
        return await util.http('api/topics')
    },
    async topicsShow (id) {
        return await util.http('api/topics/' + id)
    },
    async topicsStore (data) {
        return await util.http({method: 'post', user:'api/topics', data})
    },
    async topicsUpdate (data, id) {
        return await util.http({method: 'patch', url:'api/topics/' + id, data})
    },
    async topicsDestroy (id) {
        return await util.http({method: 'delete', url: 'api/topics/' + id})
    }
}
