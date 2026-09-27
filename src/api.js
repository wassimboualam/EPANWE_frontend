const origin = 'http://localhost:8000'
const csrf = `${origin}/csrf`
const userPrefix = `${origin}/user`
const userPathPrefix = `/user`
const user = {
  me: `${userPrefix}/me`,
  register: `${userPrefix}/register`,
  login: `${userPrefix}/login`,
  edit: `${userPrefix}/edit`,
  checkEmailChange: `${userPrefix}/checkemailchange`,
  logout: `${userPrefix}/logout`,
  editEmail: `${userPrefix}/editemail/`,
  refreshPassword: `${userPrefix}/refreshpassword`,
  paths: {
    me: `${userPathPrefix}/me`,
    register: `${userPathPrefix}/register`,
    login: `${userPathPrefix}/login`,
    edit: `${userPathPrefix}/edit`,
    checkEmailChange: `${userPathPrefix}/checkemailchange`,
    logout: `${userPathPrefix}/logout`,
    editEmail: `${userPathPrefix}/editemail/`,
    refreshPassword: `${userPathPrefix}/refreshpassword`,
  },
}

const requestPrefix = `${origin}/request`
const request = {
  index: `${requestPrefix}`,
  make: `${requestPrefix}`,
  show: `${requestPrefix}/`,
  setApproval: `${requestPrefix}/setapproval`,
}

const partnerRequestPrefix = `${origin}/partner`
const partnerRequestPathPrefix = `/partner`

const partnerRequest = {
  index: `${partnerRequestPrefix}`,
  store: `${partnerRequestPrefix}`,
  delete: `${partnerRequestPrefix}/delete/`,
  paths: {
    index: `${partnerRequestPathPrefix}`,
    store: `${partnerRequestPathPrefix}`,
    delete: `${partnerRequestPathPrefix}/delete/`,
  },
}

export default {
  origin,
  csrf,
  user,
  request,
  partnerRequest,
}