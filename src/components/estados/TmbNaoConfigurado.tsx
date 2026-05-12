export function TmbNaoConfigurado({ onIniciar }: { onIniciar: () => void }) {
  return (
    <div className="estado-panel">
      <p style={{ fontSize: 13, color: '#475569', marginBottom: 12 }}>
        Ofereça parcelamento via boleto com aprovação de crédito pela TMB.
        O comprador paga em parcelas mensais sem precisar de cartão de crédito.
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
          <div className="step-title">Análise de crédito pela TMB</div>
          <div className="step-desc">A TMB é responsável pela análise de crédito e pela aprovação do cadastro. A Eduzz não participa dessa decisão.</div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-pending">3</div>
        <div>
          <div className="step-title">Aprovação e ativação</div>
          <div className="step-desc">Após aprovação da TMB, o boleto parcelado é habilitado automaticamente neste produto.</div>
        </div>
      </div>

      <p className="estado-hint">
        Esse processo acontece apenas uma vez. Após a ativação, você poderá habilitar em qualquer produto elegível.
      </p>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={onIniciar}>Iniciar cadastro</button>
      </div>
    </div>
  )
}
