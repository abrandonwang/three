import PageLayout from '../components/PageLayout'
import ContributionGraph from '../components/ContributionGraph'

export default function Everyday() {
  return (
    <PageLayout
      title="GitHub"
      subtitle="contributions · @abrandonwang"
    >
      <ContributionGraph username="abrandonwang" />
    </PageLayout>
  )
}
