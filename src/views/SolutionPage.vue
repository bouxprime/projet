<template>
  <div>
    <SolutionVoip />
    <SolutionCollaboration />
    <SolutionMateriel />
    <SolutionIA />
  </div>
</template>

<script>
import SolutionVoip from '@/components/telephonie/SolutionVoip.vue';
import SolutionCollaboration from '@/components/telephonie/SolutionCollaboration.vue';
import SolutionMateriel from '@/components/telephonie/SolutionMateriel.vue';
import SolutionIA from '@/components/telephonie/SolutionIA.vue';

export default {
  components: {
    SolutionVoip,
    SolutionCollaboration,
    SolutionMateriel,
    SolutionIA,
  },
};
</script>