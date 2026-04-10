export function TmbNaoConfigurado({ onIniciar }: { onIniciar: () => void }) {
  return (
    <div className="estado-panel">
      <p style={{ fontSize: 13, color: '#475569', marginBottom: 12 }}>
        Ofereca parcelamento via boleto com aprovacao de credito pela TMB.
        O comprador paga em parcelas mensais sem precisar de cartao de credito.
      </p>

      <div className="step">
        <div className="step-circle step-circle-pending">1</div>
        <div>
          <div className="step-title">Preencher dados do representante legal da conta</div>
          <div className="step-desc">Informar nome e CPF do representante e aceitar o contrato de parceria</div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-pending">2</div>
        <div>
          <div className="step-title">Aguardar aprovacao da TMB</div>
          <div className="step-desc">Voce sera notificado quando sua conta for aprovada</div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-pending">3</div>
        <div>
          <div className="step-title">Boleto parcelado habilitado</div>
          <div className="step-desc">Apos aprovacao, sera ativado automaticamente neste produto e disponivel para qualquer produto elegivel</div>
        </div>
      </div>

      <p className="estado-hint">
        Esse processo acontece apenas uma vez.
      </p>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={onIniciar}>Iniciar cadastro</button>
      </div>
    </div>
  )
}
