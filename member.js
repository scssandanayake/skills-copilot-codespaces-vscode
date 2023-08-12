function skillsMember(){
    return{
        restrict:'E',
        tempalteUrl: "modules?member/member.html",
        controller: 'SkillsMembercontroller',
        controllerAs: 'vm',
        bindToController: true,
        scope:{
            member:'m'
        }
    };
}