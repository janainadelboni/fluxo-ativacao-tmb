interface Props {
  showCheckout: boolean
  onToggleCheckout: () => void
  onDesativar: () => void
}

export function TmbAtivo({ showCheckout }: Props) {
  return (
    <div className="estado-panel">
      {showCheckout ? (
        <>
          <div className="alert alert-success">
            Boleto parcelado ativo neste produto. A opcao TMB ja esta disponivel no checkout para os compradores.
          </div>
          <div className="alert" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#475569' }}>
            Taxa cobrada em todas as parcelas. Acompanhe as vendas em Assinaturas &rarr; Boleto Parcelado.
          </div>
        </>
      ) : (
        <div className="alert alert-warning">
          Boleto parcelado desativado no checkout. O comprador nao vera a opcao TMB como forma de pagamento. Ative o switch acima para disponibilizar.
        </div>
      )}
    </div>
  )
}
