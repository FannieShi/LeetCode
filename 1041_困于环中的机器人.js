/**
 * 在无限的平面上，机器人最初位于 (0, 0) 处，面朝北方。机器人可以接受下列三条指令之一：
 * "G"：直走 1 个单位
 * "L"：左转 90 度
 * "R"：右转 90 度
 * 机器人按顺序执行指令 instructions，并一直重复它们。
 * 只有在平面中存在环使得机器人永远无法离开时，返回 true。否则，返回 false。
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  let x = 0
  let y = 0
  let stepX = 0
  let stepY = 1
  let count = 0
  do{
    count++
    for(let i=0; i<instructions.length; i++){
      let tempX = stepX
      let tempY = stepY
      if(instructions[i] == 'L'){
        stepX = tempX == 0 ? 0 - tempY : 0
        stepY = tempY == 0 ? tempX : 0
      }else if(instructions[i] == 'R'){
        stepX = tempX == 0 ? tempY : 0
        stepY = tempY == 0 ? 0 - tempX : 0
      }else {
        x += stepX
        y += stepY
      }
    }
  }while(!(x==0 && y==0) && count <= 4)
  return x == 0 && y == 0 ? true : false
};