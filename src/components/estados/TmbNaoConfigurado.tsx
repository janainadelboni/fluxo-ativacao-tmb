export function TmbNaoConfigurado({ onIniciar }: { onIniciar: () => void }) {
  return (
    <div className="estado-panel">
      <p style={{ fontSize: 13, color: '#475569', marginBottom: 12 }}>
        Ofereca parcelamento via boleto com aprovacao de credito pela TMB.
        O comprador paga em parcelas mensais sem precisar de cartao de credito.
      </p>
      <div className="alert alert-warning">
        A taxa da Eduzz sera cobrada em todas as parcelas. Confirme os valores com seu gerente de conta antes de ativar.
      </div>

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
          <div className="step-title">Ativacao neste produto</div>
          <div className="step-desc">Disponivel apos o cadastro do produtor ser confirmado pela TMB</div>
        </div>
      </div>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={onIniciar}>Iniciar cadastro</button>
      </div>
    </div>
  )
}
