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
          <div className="step-title">Cadastro do produtor na TMB</div>
          <div className="step-desc">Preencher dados do representante legal e assinar o contrato de parceria</div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-pending">2</div>
        <div>
          <div className="step-title">Ativar funcionalidade</div>
          <div className="step-desc">Apos a aprovacao do cadastro, a TMB sera ativada automaticamente no checkout deste produto</div>
        </div>
      </div>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={onIniciar}>Iniciar cadastro</button>
      </div>
    </div>
  )
}
