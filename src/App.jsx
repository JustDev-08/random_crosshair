import React, { useState } from 'react'

const App = () => {
  const [setting_val, setSetting_val] = useState({
    color: "red",
    outline_opacity: 0,
    outline_thick: 0,
    dot_size: 0,
    dot_opacity: 0,
    innerline_opacity: 0,
    innerline_len: 0,
    innerline_thick: 0,
    innerline_offset: 0,
  }
  )
  const loop_setting = (setting) => {
    const setting_arr = []
    for (const key in setting) {
      setting_arr.push(`${key} : ${setting[key]}`)
    }
    console.log(setting_arr)
    return setting_arr
  }

  const randomsetting = () => {
    for (const key in setting_val) {
      if (key == 'color') {
        const random_color = Math.floor(Math.random() * 8)
        const colorList = ['white', 'green', 'yellowgreen', 'greenyellow', 'yellow', 'cyan', 'pink', 'red']
        console.log(colorList[random_color])
        setSetting_val((prev) => ({
          ...prev,
          color: colorList[random_color]
        }))
      }
      else if (key == 'outline_opacity') {
        const random_outline = Math.random()
        console.log(random_outline);
        setSetting_val((prev) => ({
          ...prev,
          outline_opacity: random_outline.toPrecision(2)
        }))
      }
      else if (key == 'outline_thick') {
        const random_thick = Math.random() * 11
        console.log(random_thick)
        setSetting_val(prev => {
          return {
            ...prev,
            outline_thick: random_thick.toPrecision(3)
          }
        })
      }
      else if (key == 'dot_size') {
        const random_dotsize = Math.floor(Math.random() * 11)
        console.log(random_dotsize)
        setSetting_val(prev => {
          return {
            ...prev,
            dot_size: random_dotsize
          }
        })
      }
      else if (key == 'dot_opacity') {
        const random_dot_opacity = Math.random().toPrecision(2)
        console.log(random_dot_opacity)
        setSetting_val(prev => {
          return {
            ...prev,
            dot_opacity: random_dot_opacity
          }
        })
      }
      else if (key == 'innerline_offset') {
        const random_innerline_offset = Math.floor(Math.random() * 11)

        setSetting_val(prev => {
          return {
            ...prev,
            innerline_offset: random_innerline_offset
          }
        })
      }
      else if (key == 'innerline_opacity') {
        const random_innerline_opacity = Math.random().toPrecision(2)

        setSetting_val(prev => {
          return {
            ...prev,
            innerline_opacity: random_innerline_opacity
          }
        })
      }
      else if (key == 'innerline_len') {
        const random_innerline_len = Math.floor(Math.random() * 21)

        setSetting_val(prev => {
          return {
            ...prev,
            innerline_len: random_innerline_len
          }
        })
      }
      else if (key == 'innerline_thick') {
        const random_innerline_thick = Math.floor(Math.random() * 11)

        setSetting_val(prev => {
          return {
            ...prev,
            innerline_thick: random_innerline_thick
          }
        })
      }
    }
  }
    return (
      <div style={{ textAlign: 'center', margin: 10 }}>
        <button onClick={randomsetting}>Click to random</button>
        {loop_setting(setting_val).map((item, index) => {
          return <h1 key={index}>{item}</h1>
        })}

      </div>
    )
  }


export default App