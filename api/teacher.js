import request from '@/utils/request'




export default {
  getTeacherPageList(page, limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  getTeacherInfo(teacherId) {
    return request({
      url: `/eduservice/teacherfront/getTeacherInfo/${teacherId}`,
      method: 'get'
    })
  }
}
