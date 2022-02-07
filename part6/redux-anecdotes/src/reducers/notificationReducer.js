let timeId = 0
const notificationReducer = (state = null, action) => {
    switch (action.type) {
      case 'SHOW_NOTIFICATION': {
        return action.data.notification
      }
      case 'REMOVE_NOTIFICATION':
          return null
      default:
        return state
    }
}
export const setNotification = (notification, time) => {
  return async (dispatch) => {
    clearTimeout(timeId)
    timeId = setTimeout(
      () =>
        dispatch(removeNotification()),
      time * 1000
    )

    dispatch({
      type: 'SHOW_NOTIFICATION',
      data: {
        notification,
      },
    })
  }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}

export default notificationReducer