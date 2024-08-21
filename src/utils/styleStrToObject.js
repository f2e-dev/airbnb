const styleStrToObject = (styleStr) => {
  const styleRules = styleStr.split(';').filter((rule) => rule.trim() !== '')
  const styleObj = styleRules.reduce((acc, rule) => {
    const [property, value] = rule.split(':').map((item) => item.trim())
    const camelCaseProperty = property.replace(/-([a-z])/g, (_, letter) =>
      letter.toUpperCase()
    )
    acc[camelCaseProperty] = value
    return acc
  }, {})
  return styleObj
}

export default styleStrToObject
