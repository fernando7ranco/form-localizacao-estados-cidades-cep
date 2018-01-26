$(function(){
	
	var regex = {	
		cep:function(c){
			var r = /^(\d){8}$/;
			return r.test(c);
		}
	};
			
	
	$('input[name=cep]').keydown(function(event){
		
		if(event.keyCode == 13){
		
			var cep = $(this).val();
			
			if(regex.cep(cep)){
				
				$('input[name=cep]').addClass('loadInput')
				//Consulta o webservice viacep.com.br/
				$.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?",function(dados){
					
					if(!("erro" in dados)){
						$("input[name=logradouro]").val(dados.logradouro);
						$("input[name=bairro]").val(dados.bairro);
						selectsEC(dados.uf,dados.localidade)				
						$('input[name=cep]').removeClass();
					}else{
						alert("CEP não encontrado.");
						$('input[name=cep]').addClass('erroInput')
					}
					
				}).fail(function() {
					alert("erro no sistema, CEP não encontrado.");
				})
			}else
				alert('cep invalido')
		}
	});
	
});