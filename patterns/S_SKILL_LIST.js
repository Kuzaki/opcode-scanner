module.exports = pak => {
	let prev = pak.prev()

	if(!prev || prev.name() !== 'S_INVEN' || !pak.parse() || pak.parsed.skillList.length == 0
		|| !/^1(\d[^0]|[^0]\d)00$/.test(pak.parsed.skillList[0].skill) || pak.parsed.skillList[0].type !== 1) return false

	for(let skill of pak.parsed.skillList)
		if(skill.type > 1) return false

	return true
}