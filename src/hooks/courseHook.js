const api = 'api/course';

export const create = async (params, credentials, course) => {
  try {
    let response = fetch(`${api}/` + params, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + credentials,
      },
      body: JSON.stringify({
        course,
      }),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const list = async (signal) => {
  try {
    let response = fetch(`${api}/`, {
      method: 'GET',
      signal: signal,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const read = async (params, signal) => {
  try {
    let response = fetch(`${api}/`, {
      method: 'GET',
      signal: signal,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
export const update = async (params, credentials, course) => {
  try {
    let response = await fetch(`${api}/` + params.courseId, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
      body: course,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const remove = async (params, credentials) => {
  try {
    let response = await fetch(`${api}/` + params.courseId, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const listByInstructor = async (params, credentials, signal) => {
  try {
    let response = await fetch(`${api}/by/` + params.userId, {
      method: 'GET',
      signal: signal,
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const newLesson = async (params, credentials, lesson) => {
  try {
    let response = await fetch(`${api}/` + params.courseId + '/lesson/new', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
      body: JSON.stringify({ lesson: lesson }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
export const listPublished = async (signal) => {
  try {
    let response = await fetch(`${api}/published`, {
      method: 'GET',
      signal: signal,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
