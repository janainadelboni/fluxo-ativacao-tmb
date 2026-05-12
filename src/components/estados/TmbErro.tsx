interface Props {
  onCorrigir: () => void
  motivo?: string
}

export function TmbErro({ onCorrigir, motivo }: Props) {
  const motivoExibido = motivo ?? 'CPF informado não corresponde ao representante legal cadastrado no CNPJ da empresa.'

  return (
    <div className="estado-panel">
      <div className="alert alert-error">
        <strong>A TMB recusou seu cadastro.</strong> A análise e a aprovação do cadastro de boleto parcelado é responsabilidade da TMB. A Eduzz apenas intermedia o envio dos dados.
      </div>

      <div className="step">
        <div className="step-circle step-circle-error">i</div>
        <div className="step-content">
          <div className="step-title">Cadastro do produtor recusado pela TMB</div>
          <div className="step-desc">Motivo informado pela TMB:</div>
          <div className="erro-motivo">{motivoExibido}</div>
        </div>
      </div>

      <div className="btn-row">
        <button className="btn btn-ghost">Falar com suporte</button>
        <button className="btn btn-secondary" onClick={onCorrigir}>Corrigir dados</button>
      </div>
    </div>
  )
}
