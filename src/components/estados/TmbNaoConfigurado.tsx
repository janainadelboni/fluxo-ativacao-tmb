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
          <div className="step-title">Aprovacao e ativacao</div>
          <div className="step-desc">A TMB aprova sua conta e o boleto parcelado e habilitado automaticamente neste produto</div>
        </div>
      </div>

      <p className="estado-hint">
        Esse processo acontece apenas uma vez. Apos a ativacao, voce podera habilitar em qualquer produto elegivel.
      </p>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={onIniciar}>Iniciar cadastro</button>
      </div>
    </div>
  )
}
