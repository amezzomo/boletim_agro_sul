Boletim Agro Sul — Branch ui-refresh (package)

Este pacote contém a versão 'ui-refresh' pronta para subir ao repositório 'amezzomo/boletim_agro_sul'.

Como aplicar (via GitHub UI):
1. Faça backup do repositório atual (opcional).
2. Crie um novo branch no GitHub chamado 'ui-refresh' ou faça upload direto na branch 'main' se preferir.
3. No GitHub, vá em Add file -> Upload files e arraste os arquivos deste pacote para a raiz do repo (substitua quando solicitado).
4. Commit e, se criou branch 'ui-refresh', abra um Pull Request para 'main' e revise as mudanças antes de mergear.

Como aplicar (local):
1. Extraia o conteúdo deste ZIP para uma pasta local.
2. No seu repositório local, crie e troque para a branch 'ui-refresh':
   git checkout -b ui-refresh
3. Copie os arquivos atualizados para a raiz do repo, substituindo os antigos.
4. git add . && git commit -m "ui: refresh visual, charts, og image, workflow" && git push origin ui-refresh
5. Abra PR no GitHub da branch 'ui-refresh' para 'main'.

Notas:
- O formulário de assinatura usa Formspree como placeholder (substitua 'your_form_id' pelo seu ID no Formspree ou integre com Mailchimp/Netlify-Forms).
- O workflow em .github/workflows publica automaticamente a cada push na branch 'main' (verifique permissões).
- Revise as URLs em meta tags se seu site estiver em subpath (ex: /boletim_agro_sul/).
