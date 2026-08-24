const PROJECT = "sable-study-timer-haze";
const PROFILE = "0026";
function run(value = 'ready') {
  return { project: PROJECT, profile: PROFILE, value };
}
console.log(run());
