import api from "./api"

export { capitalise, getCsrf, requestBackend, formatDate }

function capitalise(str = '') {
  return str[0].toUpperCase() + str.substring(1)
}

async function getCsrf() {
  const response = await fetch(api.csrf, {
    credentials: 'include',
  })
  return await response.text()
}

const defaultOptions = {
  origin: api.origin,
  path: '/',
  csrf: '',
  contentType: 'application/json',
  method: 'GET',
  credentials: 'include',
  promiseFunction: '',
}

async function requestBackend(
  body = null,
  options = {
    origin: api.origin,
    path: '/',
    csrf: '',
    contentType: 'application/json',
    method: 'GET',
    credentials: 'include',
    promiseFunction: '',
  },
) {
  // check if field is there in defaultOptions, if not then populate it
  for (const field in defaultOptions) {
    const value = options[field]
    if (value === undefined) {
      options[field] = defaultOptions[field]
    }
  }

  const { origin, path, csrf, contentType, method, credentials, promiseFunction } = options

  const headers = {}
  if (csrf != '') headers['X-CSRF-TOKEN'] = csrf
  if (contentType != '') headers['Content-Type'] = contentType

  
  const response = await fetch(origin + path, {
    method: method,
    body: body?JSON.stringify(body):null,
    credentials: credentials,
    headers,
  })

  if (promiseFunction != '') {
    return await response[promiseFunction]()
  }
  
  if (response.headers.get("content-type").includes("application/json")) {
    return await response.json()
  } else {
    return await response.text()
  }

}

function formatDate(date = '') {
  if (!date) return '—'
  try {
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return date
  }
}