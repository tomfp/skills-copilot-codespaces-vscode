

function skillsMember() {
    var skills = document.getElementById('skills');
    var skillsMember = document.getElementById('skillsMember');
    var skillsMemberValue = skillsMember.value;
    var skillsMemberText = document.createTextNode(skillsMemberValue);
    var skillsMemberLi = document.createElement('li');
    var skillsMemberLiText = document.createTextNode(skillsMemberValue);
    skillsMemberLi.appendChild(skillsMemberLiText);
    skills.appendChild(skillsMemberLi);
    skillsMember.value = '';
}