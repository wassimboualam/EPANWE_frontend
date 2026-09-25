export { capitalise, getCsrf, requestBackend, formatDate }

function capitalise(str = '') {
  return str[0].toUpperCase() + str.substring(1)
}

async function getCsrf() {
  const response = await fetch('http://localhost:8000/csrf', {
    credentials: 'include',
  })
  return await response.text()
}

const defaultOptions = {
  origin: 'http://localhost:8000',
  path: '/',
  csrf: '',
  contentType: 'application/json',
  method: 'GET',
  credentials: 'include',
  promiseFunction: '',
}

async function requestBackend(
  body,
  options = {
    origin: 'http://localhost:8000',
    path: '/',
    csrf: '',
    contentType: 'application/json',
    method: 'GET',
    credentials: 'include',
    promiseFunction: '',
  },
) {
  for (const field in defaultOptions) {
    const value = options[field]
    if (value === undefined) {
      options[field] = defaultOptions[field]
    }
  }

  const { origin, path, csrf, contentType, method, credentials, promiseFunction } = options
  const response = await fetch(origin + path, {
    method: method,
    body: JSON.stringify(body),
    credentials: credentials,
    headers: {
      'X-CSRF-TOKEN': csrf,
      'Content-Type': contentType,
    },
  })
  if (promiseFunction != '') {
    return await response[promiseFunction]()
  }
  switch (contentType) {
    case 'application/json':
      return await response.json()

    default:
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