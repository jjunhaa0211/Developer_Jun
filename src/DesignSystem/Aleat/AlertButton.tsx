import React from "react"
import { useAlert } from "./AlertContext"
import { AlertIcon } from "./types"

export default () => {
    const { showAlert } = useAlert()
    return (
        <button onClick={() => {
            showAlert({
              title: "hehe",
              icon: AlertIcon.Success
            })
          }}
        >
          Show Alert
        </button>
    )
}