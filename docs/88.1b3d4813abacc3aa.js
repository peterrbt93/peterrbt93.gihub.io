"use strict";(self.webpackChunkMarieke=self.webpackChunkMarieke||[]).push([[88],{1088:(Z,s,a)=>{a.r(s),a.d(s,{ExerciceModule:()=>h});var l=a(6814),r=a(95),m=a(4408),t=a(4769);function u(e,f){if(1&e&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"input",19),t.qZA()()),2&e){const o=f.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.s9C("id",o),t.Q6J("formControlName",o)}}const p=[{path:"",component:(()=>{class e{constructor(o){this.fb=o,this.exampleForm=this.fb.group({name:[""],releaseDate:[""],characters:this.fb.array([this.fb.control("Iron Man"),this.fb.control("Thanos"),this.fb.control("Hulk"),this.fb.control("Captain America")])})}ngOnInit(){this.exampleForm.patchValue({name:"Avengers: Endgame",releaseDate:"26/04/2019"})}addCharacter(){this.characters.push(this.fb.control("New Character"))}get characters(){return this.exampleForm.get("characters")}updateControls(){this.exampleForm.patchValue({name:"Avengers: Endgame patchValue",releaseDate:"26/04/2019 patchValue"})}resetControls(){this.exampleForm.patchValue({name:null,releaseDate:null})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-form-array"]],decls:38,vars:2,consts:[[1,"card"],[1,"card-body"],[1,"row"],[1,"col-7"],[1,"card-title","text-center","text-primary"],[3,"formGroup"],[1,"form-row"],[1,"form-group","col-md-9"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],[1,"form-group","col-md-3"],["for","releaseDate"],["type","text","id","releaseDate","formControlName","releaseDate",1,"form-control"],[1,"card","p-4"],[1,"card-title","text-center","text-info"],["formArrayName","characters"],["type","submit",1,"btn","btn-primary","mr-2",3,"click"],[1,"table","table-sm","table-bordered"],[4,"ngFor","ngForOf"],["type","text",1,"form-control",3,"id","formControlName"]],template:function(n,c){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t._uU(5,"FormArray"),t.qZA(),t.TgZ(6,"form",5)(7,"div",6)(8,"div",7)(9,"label",8),t._uU(10,"Name"),t.qZA(),t._UZ(11,"input",9),t.qZA(),t.TgZ(12,"div",10)(13,"label",11),t._uU(14,"Date"),t.qZA(),t._UZ(15,"input",12),t.qZA()(),t.TgZ(16,"div",13)(17,"h5",14),t._uU(18,"Arrays"),t.qZA(),t.TgZ(19,"div",6)(20,"div",15)(21,"button",16),t.NdJ("click",function(){return c.addCharacter()}),t._uU(22,"Add"),t.qZA(),t.TgZ(23,"button",16),t.NdJ("click",function(){return c.updateControls()}),t._uU(24,"Delete"),t.qZA(),t.TgZ(25,"table",17)(26,"thead")(27,"tr")(28,"th"),t._uU(29,"Id"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Name"),t.qZA()()(),t.TgZ(32,"tbody"),t.YNc(33,u,5,3,"tr",18),t.qZA()()()()(),t.TgZ(34,"button",16),t.NdJ("click",function(){return c.resetControls()}),t._uU(35,"Reset Controls"),t.qZA(),t.TgZ(36,"button",16),t.NdJ("click",function(){return c.updateControls()}),t._uU(37,"Update Controls"),t.qZA()()()()()()),2&n&&(t.xp6(6),t.Q6J("formGroup",c.exampleForm),t.xp6(27),t.Q6J("ngForOf",c.characters.controls))},dependencies:[l.sg,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,r.CE]})}return e})(),children:[]}];let d=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(p),m.Bz]})}return e})(),h=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[l.ez,d,r.u5,r.UX]})}return e})()}}]);