import request from '@/utils/request'




export default {
  //条件分页查询课程
  getCoursePageList(page, limit,searchObj) {
    return request({
      url: `/eduservice/coursefront/getFrontCoursePage/${page}/${limit}`,
      method: 'post',
      data:searchObj
    })
  },
  //查询所有分类的方法
  getAllSubject() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    })
  }
}
