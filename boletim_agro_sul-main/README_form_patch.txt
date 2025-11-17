
    PATCH — Integração com Formspree
    =================================

    Este patch ativa o formulário de inscrição por e-mail no site Boletim Agro Sul.

    ✅ O que faz:
    - Atualiza o <form> no index.html com o endpoint correto do Formspree.
    - Adiciona redirecionamento para /obrigado.html após envio.
    - Inclui página obrigado.html com mensagem de confirmação.

    Formspree endpoint:
    https://formspree.io/f/mblpbyjp

    🔧 Como aplicar:
    1. Abra seu arquivo index.html.
    2. Localize o trecho existente do formulário (<form action="https://formspree.io/f/your_form_id" ...>).
    3. Substitua-o completamente pelo bloco abaixo:

<!-- Atualizado: formulário funcional com Formspree -->
<form action="https://formspree.io/f/mblpbyjp" method="POST" style="display:flex;gap:8px;align-items:center">
  <input type="email" name="email" placeholder="Seu e-mail" aria-label="Seu e-mail" required style="padding:8px;border-radius:6px;border:1px solid #e6eef6">
  <input type="hidden" name="_next" value="https://amezzomo.github.io/boletim_agro_sul/obrigado.html">
  <button class="cta" type="submit">Assine por e-mail</button>
</form>
<!-- Fim do formulário atualizado -->

    4. Adicione o arquivo obrigado.html na raiz do seu site.
