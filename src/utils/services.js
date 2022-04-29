export function getToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return { token };
    } else {
      return null;
    }
  }


  export function getAgencyToken() {
    const token = localStorage.getItem('agencyToken');
    if (token) {
      return { token };
    } else {
      return null;
    }
  }